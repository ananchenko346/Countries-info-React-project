import img from './error.gif';

const ErrorMessage = () => {
  return (
    <img style={{
      display: 'block', width: "350px", height: "350px", objectFit: 'contain',
      margin: "0 auto", borderRadius: '10px'
    }} src={img} alt="error" />
  )
}

export default ErrorMessage;
