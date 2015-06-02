var traceur = Npm.require('traceur');
var ngAnnotate = Npm.require('ng-annotate');

Plugin.registerSourceHandler("next.js", function (compileStep) {
  var oldPath = compileStep.inputPath;
  var newPath = oldPath.replace(/next(?=\.js$)/, 'now');

  var source = compileStep.read().toString('utf8');
  // force Traceur to define `this` in function scope
  source = "this;\n" + source;

  var compiler = new traceur.NodeCompiler({
    sourceMaps: true,
    modules: 'commonjs'
  });

  try {
    // First, let Traceur compile 6->5
    var output = compiler.compile(source, oldPath, newPath);

    // ngAnnotate the source
    var ngAnnotatedOutput = ngAnnotate(output, { add: true });
    if(ngAnnotatedOutput.errors) {
      throw new Error(ngAnnotatedOutput.errors.join(': '));
    }

    compileStep.addJavaScript({
      sourcePath: oldPath,
      path: newPath,
      data: ngAnnotatedOutput.src,
      sourceMap: compiler.getSourceMap()
    });
  } catch (err) {
    var list = err.join("\n");
    compileStep.error({
      message: list,
    });
  }
});
