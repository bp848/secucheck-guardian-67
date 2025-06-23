
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  useEffect(() => {
    // Redirect to Typeform when component mounts
    window.location.href = 'https://form.typeform.com/to/Qv6t1Q';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-2">お問い合わせ</h1>
          <p className="text-gray-600 mb-8">
            お問い合わせフォームにリダイレクトしています...
          </p>
          <div className="flex justify-center">
            <a 
              href="https://form.typeform.com/to/Qv6t1Q" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-block"
            >
              フォームが開かない場合はこちらをクリック
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
