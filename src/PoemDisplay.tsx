const PoemDisplay = () => {
  const poems = [
      "There once was a fish from the sea\n" +
      "Who liked to splash and eat brie\n" +
      "He swam all around\n" +
      "And never was found\n" +
      "He was dead and floating all free (lactose intolerant)"
  ];
  return(
    <div className={"poemBox"}>
      <p>{poems[Math.floor(Math.random()*poems.length)]}</p>
    </div>
  );
}

export default PoemDisplay;