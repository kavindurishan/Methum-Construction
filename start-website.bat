@echo off
title Methum Construction Web Portal
echo ========================================================
echo   Starting Methum Construction Corporate Web Server...
echo ========================================================
echo.
echo Opening local development server on http://localhost:3000
echo Press Ctrl+C in this window anytime to stop the server.
echo.
start http://localhost:3000
npm run dev
pause
