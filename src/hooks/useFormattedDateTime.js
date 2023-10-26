import { useState, useEffect } from 'react';

function useFormattedDateTime(screening) {
  const [formattedDateTime, setFormattedDateTime] = useState('');

  useEffect(() => {
    if (screening) {
      const localizedDateTime = new Date(screening.time).toLocaleString('sv-SE').slice(0, -3);
      setFormattedDateTime(localizedDateTime);
    } else {
      setFormattedDateTime('');
    }
  }, [screening]);

  return formattedDateTime;
}

export default useFormattedDateTime;
