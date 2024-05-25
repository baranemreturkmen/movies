import {Form, Button} from 'react-bootstrap';
import React, { useState, useImperativeHandle, forwardRef} from 'react';

const ReviewForm = forwardRef(({handleSubmit, revText, labelText, defaultValue}, ref) => {
  /*useState kullanarak value ve isFocused durumlarını tanımladık. 
    value metin alanının değerini tutarken, isFocused alanın odaklanma durumunu takip eder.*/
  const [value, setValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);

  /*handleFocus: Metin alanına ilk kez odaklandığında tetiklenir. 
    Bu işlev, alanın değerini boş bir string yapar ve isFocused durumunu true olarak ayarlar.
    handleChange: Metin alanında bir değişiklik olduğunda tetiklenir ve value durumunu günceller.*/
  const handleFocus = () => {
    if (!isFocused) {
      setValue('');
      setIsFocused(true);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useImperativeHandle(ref, () => ({
    reset: () => {
      setValue(defaultValue);
      setIsFocused(false);
    }
  }));

  return (
    <Form>
      {/*Form.Group: Bir form grubu oluşturur. Bu, formun belirli bir kısmını gruplayarak daha düzenli hale getirir.
         className="mb-3": Bootstrap sınıfı ile form grubunun altına marjin ekler (mb = margin-bottom).
         controlId="exampleForm.ControlTextarea1": Bu form kontrolüne bir ID atar, bu ID genellikle etiketle ilişkilendirilir.*/}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        {/*Form.Control: Formdaki bir giriş alanını temsil eder.
           ref={revText}: revText prop'unu bu form kontrolüne referans olarak geçirir. Bu, form kontrolüne doğrudan erişim sağlar.
           as="textarea": Bu form kontrolünü bir textarea (çok satırlı metin alanı) olarak ayarlar.
           rows={3}: textarea bileşeninin üç satır yüksekliğinde olmasını sağlar.value={value}: Metin alanının değerini value durumuyla kontrol eder.
           onFocus={handleFocus}: Metin alanına odaklandığında handleFocus işlevini çağırır.
           onChange={handleChange}: Metin alanında bir değişiklik olduğunda handleChange işlevini çağırır.
           className={isFocused ? 'text-dark' : 'text-muted'}: Odaklanma durumuna göre sınıf adı belirler. 
           Odaklanmışsa (isFocused true ise) text-dark, değilse text-muted sınıfı kullanılır.*/}
        <Form.Control 
          ref={revText} 
          as ="textarea" 
          rows={3}
          value={value} 
          onFocus={handleFocus}
          onChange={handleChange}
          className={isFocused ? 'text-dark' : 'text-muted'}
          ></Form.Control>
      </Form.Group>
      {/*Submit butonuna bastığımda Reviews.js sayfasında ki addReview metodu tetikleniyor.*/}
      <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>
  )
});

export default ReviewForm