import { observer } from '@formily/react';
import { StorePage, useStore } from '@yimoko/store';
import React from 'react';

import { Button, Divider, Step, Steps, Tabs } from '@/library';
import icons from '@/src/icons';

const { Service, My, Checklist } = icons;

function Index() {
  const store = useStore({
    defaultValues: {
      tab: 'Schema',
      stepState: {
        current1: 1,
        current2: 1,
        current3: 1,
        current4: 1,
      },
    },
  });
  const { tab, stepState } = store.values;
  const { setValues } = store;
  const handleStep = (params: string) => {
    if (stepState[params] >= 3) {
      stepState[params] = 1;
      setValues({ ...stepState });
    } else {
      stepState[params] += 1;
      setValues({ ...stepState });
    }
  };

  return (
    <div>
      <Tabs
        value={tab}
        options={[{ title: 'JSX', value: 'JSX' }, { title: 'Schema', value: 'Schema' }]}
        onChange={value => setValues({ tab: `${value}` })}
      />
      {tab === 'JSX' ? (
        <>
          <Divider>基础用法</Divider>
          <Steps
            value={stepState.current1}
          >
            <Step value={1} title='步骤一'>1</Step>
            <Step value={2} title='步骤二'>2</Step>
            <Step value={3} title='步骤三'>3</Step>
          </Steps>
          <Button type='danger' onClick={() => handleStep('current1')}>
            下一步
          </Button>
          <Divider>点状</Divider>
          <Steps
            dot
            value={stepState.current2}
          >
            <Step value={1}>1</Step>
            <Step value={2}>2</Step>
            <Step value={3}>3</Step>
          </Steps>
          <Button type='danger' onClick={() => handleStep('current2')}>
            下一步
          </Button>
          <Divider>自定义图标</Divider>
          <Steps
            value={stepState.current3}
          >
            <Step value={1} icon={<Service />}>1</Step>
            <Step value={2} icon={<My />}>2</Step>
            <Step value={3} icon={<Checklist />}>3</Step>
          </Steps>
          <Button type='danger' onClick={() => handleStep('current3')}>
            下一步
          </Button>
          <Divider>自定义图标</Divider>
          <Steps
            direction='vertical'
            value={stepState.current4}
          >
            <Step value={1} icon={<Service />}>1</Step>
            <Step value={2} icon={<My />}>2</Step>
            <Step value={3} icon={<Checklist />}>3</Step>
          </Steps>
          <Button type='danger' onClick={() => handleStep('current4')}>
            下一步
          </Button>
        </>
      ) : (
        <StorePage
          store={store}
          scope={{ icons }}
          schema={{
            type: 'object',
            properties: {
              d1: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '基础用法',
                },
              },
              'stepState.current1': {
                type: 'number',
                'x-component': 'Steps',
                'x-component-props': {
                  options: [
                    {
                      value: 1,
                      title: '步骤一',
                    },
                    {
                      value: 2,
                      title: '步骤二',
                    },
                    {
                      value: 3,
                      title: '步骤三',
                    },
                  ],
                },
              },
              b1: {
                type: 'void',
                'x-component': 'Button',
                'x-component-props': {
                  type: 'danger',
                  children: '下一步',
                  onClick: () => handleStep('current1'),
                },
              },
              d2: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '点状',
                },
              },
              'stepState.current2': {
                type: 'number',
                'x-component': 'Steps',
                'x-component-props': {
                  dot: true,
                  options: [
                    {
                      value: 1,
                    },
                    {
                      value: 2,
                    },
                    {
                      value: 3,
                    },
                  ],
                },
              },
              b2: {
                type: 'void',
                'x-component': 'Button',
                'x-component-props': {
                  type: 'danger',
                  children: '下一步',
                  onClick: () => handleStep('current2'),
                },
              },
              d3: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '自定义图标',
                },
              },
              'stepState.current3': {
                type: 'number',
                'x-component': 'Steps',
                'x-component-props': {
                  options: [
                    {
                      value: 1,
                      icon: <Service />,
                    },
                    {
                      value: 2,
                      icon: <My />,
                    },
                    {
                      value: 3,
                      icon: <Checklist />,
                    },
                  ],
                },
              },
              b3: {
                type: 'void',
                'x-component': 'Button',
                'x-component-props': {
                  type: 'danger',
                  children: '下一步',
                  onClick: () => handleStep('current3'),
                },
              },
              s3: {
                type: 'void',
                'x-component': 'Divider',
                'x-component-props': {
                  children: '自定义图标',
                },
              },
              'stepState.current4': {
                type: 'number',
                'x-component': 'Steps',
                'x-component-props': {
                  direction: 'vertical',
                  options: [
                    {
                      value: 1,
                      icon: <Service />,
                    },
                    {
                      value: 2,
                      icon: <My />,
                    },
                    {
                      value: 3,
                      icon: <Checklist />,
                    },
                  ],
                },
              },
              b4: {
                type: 'void',
                'x-component': 'Button',
                'x-component-props': {
                  type: 'danger',
                  children: '下一步',
                  onClick: () => handleStep('current4'),
                },
              },
            },
          }
          }
        />)
      }
    </div >
  );
}

export default observer(Index);
