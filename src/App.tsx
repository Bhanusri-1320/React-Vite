import Message from "./Message"
import ListGroup from "./Components/ListGroup"
import Alert from "./Components/Alert"
import Button from "./Components/Button";
import { useState } from "react";
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  let items = ['a', 'b', 'c', 'd'];
  const onSelectedItem = (items: string) => console.log(items);
  const text = "Hello! This is an alert message.";
  const handleButtonClick = () => {
    console.log("Button clicked!");
    setAlertVisible(true);
  }
  const handleAlertClose = () => {
    setAlertVisible(false);
  }
  return <div>
    {/* <ListGroup items={items} heading="Alphabets" onSelectItem={onSelectedItem} /> */}
    {alertVisible && <Alert onCloseClick={handleAlertClose}>'Hello World!'</Alert>}
    <Button children="MyButton" onClick={handleButtonClick} color="success" />
  </div>
}
export default App