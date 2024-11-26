const info = () => {
    return (
        <div>
            <p>Hello World!</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement("p", null, "Hello world!"));

root.render(info());

root.render(
<div>
    {info()}
    {info()}
    {info()}
</div>
)