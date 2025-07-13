

function Home() {
  useEffect(() => {
  if (!localStorage.getItem("isLoggedIn")) {
    navigate("/login");
  }
}, []);

  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}

export default Home
