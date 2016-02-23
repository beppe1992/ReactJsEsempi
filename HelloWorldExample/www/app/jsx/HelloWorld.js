var MyComponent = React.createClass({
    render: function(){
        return (
            <h1>Hello World!</h1>
        );
    }
});

React.render(<MyComponent />, document.getElementById('myDiv'));
