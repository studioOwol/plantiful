import React from 'react';

const LoginPage = () => {
  return (
    <section className='bg-white min-h-[90vh] flex items-center justify-center'>
      <div className='bg-[#F3FEEB] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
        <div className='md:w-1/2 px-8 md:px-16'>
          <h2 className='font-semibold mb-8 text-3xl'>나의 작은 정원 🪴</h2>
          <p className='text-s mt-4 text-[#183D3D]'>안녕하세요, 식집사 님!</p>
          <p className='text-s mt-4 text-[#183D3D]'>로그인해 주세요 😊</p>
        </div>
        <div className='md:block hidden w-1/2'>
          <img
            alt='login'
            className='rounded-2xl'
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
          />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
