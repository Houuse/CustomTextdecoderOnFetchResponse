import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const getSomeJson = async () => {
  let msg;
  msg = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  let msgClone = msg.clone();
  //only 1 reader allowed and when it's done reading it's done , thats why we clone
  //https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader
  let cloneReader = msgClone.body.getReader();

  //text decoder settings docs
  //https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder
  let td = new TextDecoder();
  let codedArr = await cloneReader.read();
  let textBasedResult = td.decode(codedArr.value);

  return textBasedResult;
};

let resPromise = getSomeJson().then(
  res => (document.getElementById("app").innerHTML = res)
);
