import Button from "./components/Button"
import Accordion from "./components/Accordion";
const items = [
  {
    title: 'What is React?',
    content: 'React is a JavaScript library for building user interfaces.'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite among developers due to its simplicity and flexibility.'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components.'
  }
];
function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      {/* <Button content="Button" link="/" /> */}
      <Accordion items={items} />
    </div>
  )
}

export default App
