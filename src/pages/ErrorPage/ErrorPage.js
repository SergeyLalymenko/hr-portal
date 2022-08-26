import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
    const navigate = useNavigate();

    useEffect(() => navigate('/dashboard'));
}

export default ErrorPage;