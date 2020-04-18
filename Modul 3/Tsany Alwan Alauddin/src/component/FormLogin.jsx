import React from 'react';
import './FormLogin.css';

const FormLogin = () => {
    return (
        <div className='kotak_login'>
            <div className='form_login'>
                <h2 className='title'>Form Login</h2>
                <h2 className='subtitle'>Tugas Pertemuan Ketiga</h2>
                <form action="">
                    <label>Username</label>
                    <input type="text" name="username" class="form_login" placeholder="Masukkan Username"></input>

                    <label>Password</label>
                    <input type="text" name="password" class="form_login" placeholder="Masukkan Password"></input>

                    <input type="submit" class="tombol_login" value="LOGIN"></input>
                    <br></br>
                    <br></br>
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    <br></br>
                    <br></br>
                    <input type="submit" class="tombol_cancel" value="cancel"></input>
                </form>
            </div>
        </div>
    );
}

export default FormLogin;