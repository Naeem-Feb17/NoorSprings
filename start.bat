@echo off
echo ========================================
echo    NOOR SPRINGS WEBSITE - STARTUP
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js version:
node --version
echo.

REM Check if MongoDB is running
echo Checking MongoDB...
sc query MongoDB | find "RUNNING" >nul
if %ERRORLEVEL% NEQ 0 (
    echo MongoDB is not running. Attempting to start...
    net start MongoDB
    if %ERRORLEVEL% NEQ 0 (
        echo WARNING: Could not start MongoDB service.
        echo Please start MongoDB manually before proceeding.
        echo.
        pause
    )
)

echo.
echo ========================================
echo Installing Dependencies...
echo ========================================
echo.

REM Install backend dependencies
if not exist "backend\node_modules" (
    echo Installing BACKEND dependencies...
    cd backend
    call npm install
    cd ..
    echo.
) else (
    echo Backend dependencies already installed.
    echo.
)

REM Install frontend dependencies
if not exist "frontend\node_modules" (
    echo Installing FRONTEND dependencies...
    cd frontend
    call npm install
    cd ..
    echo.
) else (
    echo Frontend dependencies already installed.
    echo.
)

echo.
echo ========================================
echo Starting Servers...
echo ========================================
echo.
echo Backend will start on: http://localhost:5000
echo Frontend will start on: http://localhost:3000
echo.
echo Press Ctrl+C to stop the servers
echo.
echo ========================================
echo.

REM Start both servers
cd backend
start "Noor Springs - Backend Server" cmd /k "npm run dev"
cd ..\frontend
start "Noor Springs - Frontend Server" cmd /k "npm run dev"
cd ..

echo.
echo Servers are starting in separate windows...
echo Wait for both servers to start, then open:
echo http://localhost:3000
echo.
echo ========================================
pause
