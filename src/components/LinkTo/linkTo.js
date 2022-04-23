export const linkTo = (name = 'index') => {
    switch(name){
      case 'Upload Video':
        return '/upload';
      case 'Log In':
        return '/login';
      case 'Sign Up':
        return '/signup';
    case 'View Gallery':
        return '/gallery';
    case 'Index':
        return '/index';
      default:
        return '/';
    }
  }