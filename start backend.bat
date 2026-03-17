@echo off
echo Stopping any existing process on port 8000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":8000 "') do (
    if not "%%a"=="0" (
        echo Killing previous backend process with PID %%a
        taskkill /f /pid %%a 2>nul
    )
)

echo Activating Python Virtual Environment...
call "..\.venv\Scripts\activate.bat"

cd backend

echo Checking for missing Python dependencies...
python -m pip install -r requirements.txt

echo Starting SEESOUND v1.0 Backend...
python main.py
pause
