@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\..\..\_sass-graph@2.2.4@sass-graph\bin\sassgraph" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\..\..\_sass-graph@2.2.4@sass-graph\bin\sassgraph" %*
)