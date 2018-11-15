const initState ={
    projects: [
        {id: '1', title: 'Trying out redux', content: 'Redux seems great'},
        {id: '2', title: 'Testing out redux', content: 'Redux is very great'},
        {id: '3', title: 'A fancy title', content: 'blah blah blah'}
    ]
}
// we create a switch statement that checks what the action.type is(we get that from line9) and for now consolelogs
const projectReducer = (state= initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
          console.log('created project', action.project)
    }
  return state
}


export default projectReducer