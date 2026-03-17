@echo off
echo ============================================
echo   SEESOUND v1.0 - Frontend Dev Server
echo ============================================
echo.
cd /d "%~dp0frontend"

:: Check for pnpm anywhere (already installed + in global profile)
where pnpm >nul 2>&1
if %errorlevel% equ 0 (
    goto :install_deps
)

:: Try LOCALAPPDATA\pnpm\pnpm.exe (standalone path)
set "PNPM_EXE=%LOCALAPPDATA%\pnpm\pnpm.exe"
if exist "%PNPM_EXE%" (
    doskey pnpm="%PNPM_EXE%" $*
    goto :install_deps
)

:: pnpm not found — install standalone
echo [*] Installing pnpm...
powershell -ExecutionPolicy Bypass -Command "Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression"
echo.
echo [!] pnpm installed. Open a new terminal window and run this script again.
pause
exit /b 0

:install_deps
if not exist "node_modules" (
    echo [*] Installing dependencies...
    pnpm install
    if errorlevel 1 (
        "%LOCALAPPDATA%\pnpm\pnpm.exe" install
        if errorlevel 1 ( echo [!] Install failed. & pause & exit /b 1 )
    )
)

echo [*] Starting on http://localhost:5173
echo.
node node_modules\vite\bin\vite.js
pause
