import React from 'react';
import { useHistory } from 'react-router-dom';
import {LoginBg} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';

const Login = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="imageBg"/>
            </div>
            <div className="right">
                <p className="registerTitle">Login</p>
                <Input label="Email" placeholder="Email" />
                <Gap height={15} />
                <Input label="Password" placeholder="Password" />
                <Gap height={50} />
                <Button title="Login" onClick={()=>history.push('/')} />
                <Gap height={100} />
                <Link title="Belum Punya Akun? Daftar Disini" onClick={()=>history.push('/register')} />
            </div>
        </div>
    )
}

export default Login
