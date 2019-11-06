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
  let cloneReader = msgClone.body.getReader();
  let td = new TextDecoder();
  let codedArr = await cloneReader.read();
  let textBasedResult = td.decode(codedArr.value);

  return textBasedResult;
};

let resPromise = getSomeJson().then(
  res => (document.getElementById("app").innerHTML = res)
);
