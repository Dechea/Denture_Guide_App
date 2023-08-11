export const abutmentProductFields: {
  id: string;
  name: string;
  type: string;
  options: any;
}[] = [
  {
    id: '5901f64f-35b9-4161-bada-b73b617da1f4',
    name: 'retention',
    type: 'tabs',
    options: [
      { name: 'Screwed', value: '"SCREWED"' },
      { name: 'Cemented', value: '"CEMENTED"' },
      { name: 'Attachment', value: '"ATTACHMENT"' },
      { name: 'Bar', value: '"BAR"' },
    ],
  },
  {
    id: 'cf3ddee0-06a4-4e26-b4ee-fb3858070c23',
    name: 'workflows',
    type: 'tabs',
    options: [
      { name: 'Digital', value: '"DIGITAL"' },
      { name: 'Analog', value: '"ANALOG"' },
    ],
  },
  {
    id: '8f8cda28-dc23-4200-a18e-4c88672d14f6',
    name: 'material',
    type: 'dropdown',
    options: [{ name: 'Titanium', value: '"TITANIUM"' }],
  },
  {
    id: 'c3b1c3da-3808-47bd-8fbf-d6c7e873d6c1',
    name: 'heightGingiva',
    type: 'dropdown',
    options: [{ name: '0.4mm', value: '"0.4mm"' }],
  },
  {
    id: 'e00deddd-87ff-4ef6-9675-e3f99791f1d5',
    name: 'angle',
    type: 'dropdown',
    options: [{ name: '0°', value: '0' }],
  },
];
