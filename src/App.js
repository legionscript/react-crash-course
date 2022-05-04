import Example from './components/Example'

function App() {
  const testVariable = 'abc'
  const testArray = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>Paragraph text</p>
      <Example />
      <Example />
      <Example />
      {testVariable === 'abc' ? (
        <p>{testVariable}</p>
        ) : (
        <p>AAAAAAA</p>
      )}

      {testVariable === 'abc' && (
        <>
        <p>{testVariable}</p>
        <p></p>
        </>
      )}

      <ul>
        {testArray.map(num => (
          <>
          <li>{num}</li>
          <p></p>
          </>
        ))}
      </ul>
      {/*<p>{testVariable}</p>*/}
    </div>
  );
}

export default App;
