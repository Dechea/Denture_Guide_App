export * from './components/Root0';
export * from './components/Root11';
export * from './components/Root12';
export * from './components/Root13';
export * from './components/Root14';
export * from './components/Root15';
export * from './components/Root16';
export * from './components/Root17';
export * from './components/Root18';
export * from './components/Root21';
export * from './components/Root22';
export * from './components/Root23';
export * from './components/Root24';
export * from './components/Root25';
export * from './components/Root26';
export * from './components/Root27';
export * from './components/Root28';
export * from './components/Root31';
export * from './components/Root32';
export * from './components/Root33';
export * from './components/Root34';
export * from './components/Root35';
export * from './components/Root36';
export * from './components/Root37';
export * from './components/Root38';
export * from './components/Root41';
export * from './components/Root42';
export * from './components/Root43';
export * from './components/Root44';
export * from './components/Root45';
export * from './components/Root46';
export * from './components/Root47';
export * from './components/Root48';

import cx from 'classnames';
import { ComposedImplant } from '../../visualizations/implant';
import { MappedRoot } from './MappedRoot';
import { rootStylesByVariant } from './styles';

const Root = ({
  tooth,
  variant = 'adult',
  customStyles,
}: {
  tooth: number;
  variant?: string;
  customStyles?: string;
}) => {
  const isImplantVariant = variant === 'implant';

  return (
    <>
      {isImplantVariant && (
        <ComposedImplant
          customStyles={cx(rootStylesByVariant['implant'], customStyles)}
          tooth={tooth}
        />
      )}

      {!isImplantVariant && (
        <MappedRoot
          customStyles={cx(
            rootStylesByVariant[variant as keyof typeof rootStylesByVariant],
            customStyles
          )}
          tooth={tooth}
          variant={variant}
        />
      )}
    </>
  );
};

export default Root;
