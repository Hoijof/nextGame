import { useRouter } from 'next/router';

import { useCallback, useState, useMemo } from 'react';

import {
  Input, Grid, Button, Typography,
} from '@system';

import { register } from '@/services/client/userService';

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = useCallback(async () => {
    try {
      await register(username, password);

      router.replace('/login');
    } catch (e) {
      setError(e.message);
    }
  }, [password, router, username]);

  const isValid = useMemo(() => {
    return username && password && password2 && password === password2;
  }, [password, password2, username]);

  return (
    <Grid container sx={{ alignItems: 'center', pt: 5 }} direction="column">
      {error && (
        <Grid item xs={12}>
          <Typography color="error">{error}</Typography>
        </Grid>
      )}
      <Grid item xs={12}>
        <Input
          label="Username"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          label="Password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          label="Password2"
          value={password2}
          placeholder="Repeat Password"
          onChange={(e) => setPassword2(e.target.value)}
          type="password"
        />
      </Grid>
      <Grid item xs={12}>
        <Button disabled={!isValid} onClick={onSubmit}>Create user</Button>
      </Grid>
    </Grid>
  );
}
