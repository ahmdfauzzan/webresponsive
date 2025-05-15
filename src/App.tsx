import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RouterList from "./routes/RouterList";

const queryClient = new QueryClient();
const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterList />
      </QueryClientProvider>
    </div>
  );
};

export default App;
