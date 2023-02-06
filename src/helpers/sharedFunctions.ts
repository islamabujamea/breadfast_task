/* eslint-disable prettier/prettier */

export const getNameFilterd = (fullName: string) => {
  if (fullName) {
    const name: string[] = fullName?.split(' ');
    if (name.length === 1) { return name[0]?.slice(0, 1).toUpperCase(); }
    else {
      const firstNameChar: string = name[0]?.slice(0, 1);
      const lastNameChar: string = name[1]?.slice(0, 1);
      return `${firstNameChar?.toUpperCase() ?? ''
        }${lastNameChar?.toUpperCase()}`;
    }
  } else { return 'U' + 'U'; }
};

