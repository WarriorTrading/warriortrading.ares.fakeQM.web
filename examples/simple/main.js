var json = {
    global: {},
    layout: {
        "type": "row",
        "weight": 100,
        "children": [
            {
                "type": "tabset",
                "weight": 50,
                "selected": 0,
                "children": [
                    {
                        "type": "tab",
                        "name": "One",
                        "component": "video"
                    }
                ]
            },
            {
                "type": "tabset",
                "weight": 50,
                "selected": 0,
                "children": [
                    {
                        "type": "tab",
                        "name": "Two",
                        "component": "panel"
                    }
                ]
            },
            {
                "type": "tabset",
                "weight": 50,
                "selected": 0,
                "children": [
                    {
                        "type": "tab",
                        "name": "Three",
                        "component": "panel"
                    }
                ]
            }
        ]
    }
};

const model = FlexLayout.Model.fromJson(json);

function Main(props) {

    const factory = (node) => {
        var component = node.getComponent();
        if (component === "panel") {
            return <div className="tab_content">{node.getName()}</div>;
        }
        if (component === "video") {
            return (<div><video controls autoplay><source width="20px" src="https://chatroom-resource.warriortrading.com/media/Demo+Video_1080.mp4" type="video/mp4" /></video></div>);
        }
    }
    
    return (
        <FlexLayout.Layout
            model={model}
            factory={factory}/>
    );
}

ReactDOM.createRoot(document.getElementById("container")).render(<Main/>);
