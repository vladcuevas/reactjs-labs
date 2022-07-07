//Hero

export default function WelcomeUser({username, notification}) {
    // const {username, notification} = props
    return <h1>Welcome {username}, you have {notification} notifications</h1>
}

// Virtual DOM, React components are being loaded,
// then will be loaded in the original DOM
// react is just a library,
// never ever update your properties