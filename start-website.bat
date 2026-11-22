@echo off
title Methum Constructions Web Portal
echo ========================================================
echo   Starting Methum Constructions Corporate Web Server...
echo ========================================================
echo.
echo Opening local development server on http://localhost:3000
echo Press Ctrl+C in this window anytime to stop the server.
echo.
start http://localhost:3000
npm run dev
pause
