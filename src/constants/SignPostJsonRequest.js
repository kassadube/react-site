const SignPostJsonRequest = (req) => ({
    ...req,
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`,'Content-Type': 'application/json' },
});

export default SignPostJsonRequest;