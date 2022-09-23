// customized thunk function middleware
const greetAddOn = (storeAPI) => (next) => (action) => {
  console.log('Greet ADD On:', storeAPI.getState());
  if (action.type === 'ISLOADED') {
    fetch('http://localhost:3000/api/v1/messages')
      .then((res) => res.json())
      .then((result) => {
        storeAPI.dispatch({ type: 'ISLOADED', payload: result.data });
        console.log('Fetch Data:', result.data);
      });
  }
  return next(action);
};

export default greetAddOn;
