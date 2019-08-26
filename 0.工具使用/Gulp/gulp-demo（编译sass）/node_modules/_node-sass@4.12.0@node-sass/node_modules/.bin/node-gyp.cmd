@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\_node-gyp@3.8.0@node-gyp\bin\node-gyp.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\_node-gyp@3.8.0@node-gyp\bin\node-gyp.js" %*
)