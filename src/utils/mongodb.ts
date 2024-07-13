import { MongoClient } from 'mongodb';

let cachedClient: MongoClient | null = null;

export async function connectToDatabase(uri: string) {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri)
    .catch(err => {
      console.error("Error connecting to MongoDB:", err);
      throw err;
    });

  cachedClient = client;
  return client;
}

export async function disconnectFromDatabase() {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
  }
}
