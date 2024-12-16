const ErrorPage = () => {
  return <div>
    <p>Something went wrong! Don't panic, we will work on a solution. Maybe...</p>
    <Button text="Back" role="primary-light" onClick={() => navigate(-1)} />
  </div>;
};

export default ErrorPage;
