interface AccountsProps {
  header: string;
  data: string;
}
interface TableAccountsProps {
  accounts: AccountsProps[];
}

export function TableAccounts(props: TableAccountsProps) {
  return (
    <table className="w-full overflow-hidden rounded-md text-sm md:text-base">
      {props.accounts.map((account, index) => (
        <tr className="" key={index}>
          <th className="bg-primary_green_dark px-2 py-2 text-center text-primary_white">
            {account.header}
          </th>
          <td className="bg-primary_green_light px-2 py-2">{account.data}</td>
        </tr>
      ))}
    </table>
  );
}
