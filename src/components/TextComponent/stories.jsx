import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Quos aperiam voluptatum culpa eos amet provident rem soluta,
    sapiente eaque repellendus doloremque delectus totam nam quasi
    perspiciatis ipsa, quo dolorum necessitatibus?`,
  },

  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
