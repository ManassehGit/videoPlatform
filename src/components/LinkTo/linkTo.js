export const linkTo = (name) => {
    switch(name){
      case 'Upload Video':
        return '/upload';
      case 'Log In':
        return '/login'
      case 'Sign Up':
        return '/signup';
    case 'View Gallery':
        return '/gallery'
      default:
        return '/'
    }
  }