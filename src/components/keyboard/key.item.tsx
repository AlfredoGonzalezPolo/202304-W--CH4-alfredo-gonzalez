export type PropsType = {
  number: string;
};

export function KeyItem({ number }: PropsType) {
  return (
    <>
      <li>
        <button className="key">{number}</button>
      </li>
    </>
  );
}
