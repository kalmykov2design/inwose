import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Coins, CoinsProps } from './Coins';
import { Button } from './Button';
import { Modal } from './Modal';
import { Input } from './Input';
import { Radio } from './Radio';
import { createTask, updateTask } from '../api/api';

const headerItems = [
  { path: '/mytasks', text: 'Мои задачи' },
  { path: '/pari', text: 'Пари' },
  { path: '/team', text: 'Команда' },
]

const coins: CoinsProps = {
  coinsAmount: 1128,
  hasBg: true,
}

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function formSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = e.currentTarget.elements;

    console.log(formData);

    // Преобразование значений полей в массив
    const formValuesArray: { name: string, value: string }[] = Array.from(formData).reduce((acc: { name: string, value: string }[], element) => {
      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        if (element instanceof HTMLInputElement && (element.type !== 'radio' || (element.type === 'radio' && element.checked))) {
          acc.push({ name: element.getAttribute('name') || '', value: (element as HTMLInputElement | HTMLTextAreaElement).value });
        } else if (element instanceof HTMLTextAreaElement) {
          acc.push({ name: element.getAttribute('name') || '', value: (element as HTMLInputElement | HTMLTextAreaElement).value });
        }
      } else if (element instanceof HTMLSelectElement) {
        acc.push({ name: element.getAttribute('name') || '', value: (element as HTMLSelectElement).options[(element as HTMLSelectElement).selectedIndex].value });
      }

      return acc;
    }, []);

    console.log(formValuesArray); // Вывод значений в массиве в консоль
    createTask('Новая задача', 'Описание новой задачи');
  }

  return (
    <header className="container mx-[auto] px-5">
      <div className="container-grid">
        <div className="flex items-center justify-start">
          <svg width="102" height="16" viewBox="0 0 102 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.00606405 2.82399V0H0.327389C2.72218 0 4.66226 1.26388 4.66226 2.82399H0H0.00606405ZM0.00606405 15.6919V4.20241H4.66833V15.6919H0.00606405Z" fill="black" />
            <path d="M17.9275 15.6918V8.73256C17.9275 7.8439 17.6971 7.2475 17.2485 6.93548C16.7938 6.62346 16.0178 6.46942 14.9204 6.46942C12.5074 6.46942 11.3009 7.35019 11.3009 9.10778V15.6918H6.63867V4.20233H11.0827V5.87698C11.6283 5.21739 12.3559 4.71973 13.2592 4.38007C14.1626 4.0404 15.3327 3.87451 16.7635 3.87451C17.5941 3.87451 18.3701 3.95745 19.0855 4.11939C19.8009 4.28132 20.4133 4.53015 20.9286 4.85797C21.4379 5.18579 21.8441 5.58865 22.1411 6.06261C22.4382 6.54052 22.5898 7.08952 22.5898 7.71356V15.6918H17.9275Z" fill="black" />
            <path d="M39.0431 15.6919L36.2482 9.01309L33.4533 15.6919H28.6879L23.668 4.20244H25.2685C27.2147 4.20244 28.9123 5.06346 29.3912 6.29179L31.4465 11.5804L33.8837 4.20244H38.6127L41.3712 11.5804L43.3234 6.2128C43.7539 5.03186 45.3726 4.19849 47.2339 4.19849H48.8587L43.8024 15.688H39.0371L39.0431 15.6919Z" fill="black" />
            <path d="M57.487 15.9959C56.0562 15.9959 54.777 15.8459 53.6614 15.5536C52.5398 15.2574 51.594 14.8427 50.818 14.3134C50.042 13.7842 49.4539 13.1443 49.0477 12.3939C48.6415 11.6434 48.4414 10.8259 48.4414 9.9372C48.4414 9.04854 48.6475 8.20726 49.0659 7.45683C49.4842 6.7064 50.0844 6.07051 50.8726 5.53731C51.6607 5.00806 52.6065 4.5973 53.716 4.30897C54.8255 4.02065 56.0805 3.87451 57.4931 3.87451C58.9057 3.87451 60.1183 4.02065 61.2156 4.30897C62.313 4.5973 63.2467 5.00411 64.0227 5.52546C64.7987 6.04681 65.3929 6.6827 65.8112 7.43313C66.2295 8.18357 66.4357 9.01694 66.4357 9.9372C66.4357 10.8575 66.2295 11.6869 65.8112 12.4294C65.3929 13.172 64.7987 13.8078 64.0227 14.3371C63.2467 14.8664 62.3069 15.2771 61.1974 15.5654C60.088 15.8538 58.8512 15.9999 57.4931 15.9999L57.487 15.9959ZM57.5052 13.4524C60.3487 13.4524 61.7734 12.2833 61.7734 9.94905C61.7734 7.61482 60.3487 6.46942 57.5052 6.46942C54.6618 6.46942 53.237 7.63062 53.237 9.94905C53.237 12.2675 54.6557 13.4524 57.5052 13.4524Z" fill="black" />
            <path d="M79.0703 7.68208C78.8035 7.68208 78.561 7.57149 78.5004 7.40165C78.3488 7.01459 78.0699 6.72231 77.6698 6.52483C77.1787 6.2839 76.433 6.16147 75.4326 6.16147C74.4322 6.16147 73.7532 6.23651 73.2621 6.38264C72.771 6.53273 72.5285 6.78551 72.5285 7.14098C72.5285 7.453 72.771 7.70182 73.2621 7.88746C73.7532 8.07309 74.4626 8.25477 75.3962 8.42461C76.924 8.70503 78.2154 8.94201 79.2703 9.13554C80.3192 9.32907 81.1619 9.55815 81.7985 9.82278C82.429 10.0874 82.8837 10.4192 83.1626 10.8141C83.4354 11.2131 83.5749 11.7463 83.5749 12.4137C83.5749 13.4406 82.9201 14.2938 81.6045 14.9692C80.2889 15.6445 78.3427 15.9842 75.76 15.9842C74.4929 15.9842 73.347 15.8894 72.3163 15.7038C71.2857 15.5182 70.4126 15.2496 69.679 14.8981C68.9515 14.5465 68.3877 14.1279 67.9936 13.6381C67.5995 13.1484 67.3873 12.5994 67.3691 11.9911H71.6191C71.9162 11.9911 72.1648 12.1294 72.2193 12.3189C72.3285 12.7139 72.6437 13.0299 73.1651 13.2669C73.8199 13.567 74.6748 13.7171 75.7297 13.7171C76.6148 13.7171 77.3727 13.6263 78.0032 13.4485C78.6337 13.2708 78.9551 12.9904 78.9551 12.6191C78.9551 12.1965 78.7247 11.8924 78.2578 11.7068C77.791 11.5211 77.0817 11.3552 76.1238 11.217C74.4019 10.9682 73.0196 10.7075 71.9647 10.431C70.9098 10.1585 70.0974 9.85833 69.5093 9.53051C68.9212 9.20269 68.5271 8.84327 68.327 8.45225C68.127 8.06124 68.0239 7.62678 68.0239 7.14098C68.0239 6.70257 68.1634 6.2918 68.4362 5.90079C68.709 5.50978 69.1455 5.16616 69.7457 4.86993C70.3399 4.57371 71.122 4.33673 72.0738 4.15505C73.0257 3.97337 74.2019 3.88647 75.5842 3.88647C78.1184 3.88647 79.9675 4.22219 81.1377 4.88968C82.3078 5.56112 82.9565 6.48534 83.0717 7.67023H79.0763L79.0703 7.68208Z" fill="black" />
            <path d="M88.9787 10.739C89.0514 11.6119 89.4394 12.3031 90.1427 12.8165C90.846 13.33 91.7736 13.5867 92.9195 13.5867C93.6834 13.5867 94.3563 13.4722 94.9444 13.247C95.5325 13.0219 95.9084 12.7059 96.0721 12.3031H100.874C100.322 13.488 99.3702 14.3964 98.0061 15.0362C96.642 15.6761 95.0172 15.992 93.1317 15.992C87.2508 15.992 84.3164 13.9066 84.3164 9.73185C84.3164 8.84318 84.5104 8.0414 84.8924 7.32652C85.2743 6.61164 85.8321 5.99549 86.5596 5.48204C87.2872 4.96859 88.1784 4.57362 89.2333 4.3011C90.2822 4.02857 91.4886 3.89429 92.8528 3.89429C95.5749 3.89429 97.6363 4.46303 99.0368 5.60053C100.437 6.73803 101.134 8.44822 101.134 10.739H88.9847H88.9787ZM96.3267 8.82343C96.3025 8.40477 96.1873 8.03351 95.9872 7.71358C95.7811 7.39366 95.5143 7.12904 95.1809 6.91971C94.8474 6.71038 94.4655 6.55239 94.035 6.45365C93.6046 6.35096 93.162 6.30357 92.7073 6.30357C91.7736 6.30357 90.9672 6.52475 90.2882 6.97105C89.6092 7.41341 89.2212 8.03351 89.1242 8.82738H96.3267V8.82343Z" fill="black" />
          </svg>
        </div>
        <nav className='flex items-center justify-start gap-2'>
          {headerItems.map(item => (
            <NavLink className={(navData) => ((navData.isActive ? 'header__item header__item--active' : 'header__item'))} to={item.path} key={`header-${item.path}`}>{item.text}</NavLink>
          ))}
        </nav>
        <div className="gap-2">
          <Button type='arbitrary' style={{ backgroundColor: "#0066ff", color: "white" }} action={openModal}>+ создать задачу</Button>
          <Coins coins={coins} />
        </div>
      </div>


      <Modal isOpen={isModalOpen} handleClose={closeModal}>
        <div className="flex justify-between">
          <h3 className='text-2xl'>Создать дело</h3>
          <Button type='linkLike'>Подробное дело</Button>
        </div>
        <form action="/" onSubmit={e => formSubmit(e)}>
          <Input placeholder='Название дела' name='taskName' wide />
          <Input placeholder='Описание' name='taskDescr' wide textarea />
          <div className="flex gap-8 mt-4">
            <div className="flex flex-col">
              <h4>Категория</h4>
              <Radio options={[
                { label: 'Повышение квалификации', id: 'categoryRadio1', name: "categoryName" },
                { label: 'Расширение кругозора', id: 'categoryRadio2', name: "categoryName" }
              ]} />
            </div>
            <div className="flex flex-col">
              <h4>Значимость</h4>
              <Radio options={[
                { label: 'Большое', id: 'sizeRadio1', name: "sizeName" },
                { label: 'Среднее', id: 'sizeRadio2', name: "sizeName" },
                { label: 'Маленькое', id: 'sizeRadio3', name: "sizeName" },
              ]} />
            </div>
          </div>
          <div className="mt-4 flex gap-2 items-end">
            <Input name='deadline' label='Дедлайн' placeholder='Выбрать дату' />
            <Input name='deadline' placeholder='Время на задачу' />
          </div>
          <div className="mt-4 flex justify-end">
            <Button type='submit'>Готово</Button>
          </div>
        </form>
      </Modal>
    </header>
  );
}
