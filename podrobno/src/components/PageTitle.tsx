import React from 'react';

type PageTitlePropsType = {
   title: string
}

export const PageTitle = (props: PageTitlePropsType) => {
   return (
      <div>
         <h3>{props.title}</h3>
      </div>
   );
};

