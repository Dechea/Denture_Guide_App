import { Skeleton, View } from 'reshaped';

const ProductCardSkeleton = () => {
  return (
    <View padding={6} paddingBottom={10}>
      <View direction='row' gap={6}>
        <Skeleton
          width={{ s: '120px', l: '140px' }}
          height={{ s: '120px', l: '140px' }}
        />

        <View gap={2} grow>
          <View direction='row' align='start' className='!justify-between'>
            <Skeleton width='100%' height='50px' />
          </View>
          <View direction='row' gap={4}>
            <Skeleton width='100%' />
          </View>
        </View>
      </View>
      <View.Item grow>
        <View gap={6} paddingStart={{ l: 41 }} paddingTop={{ s: 8, l: 0 }}>
          <Skeleton width='100%' height='46px' />
          <Skeleton width='100%' height='46px' />
          <Skeleton width='140px' height='20px' />
          <View direction='row' gap={4}>
            <View.Item columns={6}>
              <Skeleton height='56px' />
            </View.Item>
            <View.Item columns={6}>
              <Skeleton height='56px' />
            </View.Item>
          </View>
          <View direction='row' gap={4}>
            <View.Item columns={6}>
              <Skeleton height='56px' />
            </View.Item>
          </View>
        </View>
      </View.Item>
    </View>
  );
};

export default ProductCardSkeleton;
