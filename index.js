const Box = (props) => {
  const { class, text } = props
  return (<div className={class}>{text}</div>);
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div class="boxes-container">
    <Box class="small-card" text="Small" />
    <Box class="medium-card" text="Medium" />
    <Box class="large-card" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
