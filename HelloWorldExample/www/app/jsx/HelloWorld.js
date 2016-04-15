var MyForm = React.createClass({
  getInitialState: function() {
     return {
         input: '',
         output: ''
     };
   },
   updateInput(event){
      this.setState({
           input: event.target.value
      })
    },
    submit(event){
      this.state.output = this.state.input,
      this.setState({
        input : ''
      })
   },
   render: function(){
       return(
         <div>
           <input type="text" onChange={this.updateInput} value={this.state.input} />
           <button type="submit" onClick={this.submit}>Ricerca</button>
           <h1>Ciao {this.state.output}!!!! </h1>
         </div>
       );
     }
});

ReactDOM.render(<MyForm />, document.getElementById('MyForm'));
