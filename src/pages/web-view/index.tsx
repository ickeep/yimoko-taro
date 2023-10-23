import { WebView } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';

function Index() {
  const router = useRouter();
  const { src = '', ...rest } = router.params;

  return (<WebView src={src} {...rest} />);
}

export default Index;
