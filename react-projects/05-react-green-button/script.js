const App = () => {
  const [buttonText, setButtontext] = React.useState("Click me");

  const onButtonClick = () => {
    setButtontext("Hello frome React");
  };
  return (
    <div className="app">
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App />);
