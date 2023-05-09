# Blockchain Energy Market

## Kivy instalation
1. Update pip
    ```bash
    python -m pip install --upgrade pip setuptools virtualenv
    ```
2. Create virtual environment named `kivy_venv`
    ```bash
    python -m virtualenv kivy_venv
    ```
3. Activate the virtual environment. You will have to do this step from the
   current directory every time you start a new terminal. This sets up  the 
   environment so the new kivy_venv Python is used. 

    For **Windows default CMD**, in the command line do:
    ```bash
    kivy_venv\Scripts\activate
    ```
    If you are in **linux** or **macOS**, instead do:
    ```bash
    source kivy_venv/bin/activate
    ```
Your terminal should now preface the path with something like `(kivy_venv)`,
indicating that the `kivy_venv` environment is active. If it doesn’t say that,
the virtual environment is not active and the following won’t work.

4. Install Kivy
   For **Windows default CMD**, in the command line do:
   ```bash
   pip install kivy[base] kivy_examples --pre --extra-index-url https://kivy.org/downloads/simple/
   ```
   For **linux** or **macOS** do:
   ```bash
   python -m pip install "kivy[base]" kivy_examples
   ```