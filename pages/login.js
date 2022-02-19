import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import {
  Input, Grid, Button, Typography, Link,
} from '@system';

import { login } from '@/services/client/userService';
import { setToken, getToken } from '@/utils/index';

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = useCallback(async () => {
    try {
      const { token } = await login(username, password);

      setToken(token);

      router.replace('/');
    } catch (e) {
      setError(e.message);
    }
  }, [password, router, username]);

  if (getToken()) {
    return (
      <Grid container sx={{ alignItems: 'center', pt: 5 }} direction="column">
        <Grid item xs={12}>
          <Typography color="success">You are logged in</Typography>
          <Link href="/logout"> Logout </Link>
        </Grid>
      </Grid>
    );
  }

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
        <Button onClick={onSubmit}>Login</Button>
      </Grid>
    </Grid>
  );
}
